const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const ICS_DAYS = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
const DAY_MS = 86_400_000;

export const CORNER_ADDRESS = "MEWA Information Center, My-Tac Hall, next to Masjid Musa, Majengo, Mombasa, Kenya";

// Sessions follow the Corner's local calendar, regardless of the visitor's time zone.
const todayInMombasa = () => {
  const [year, month, day] = new Intl.DateTimeFormat("en-CA", { timeZone: "Africa/Nairobi", year: "numeric", month: "2-digit", day: "2-digit" })
    .format(new Date())
    .split("-")
    .map(Number);
  return new Date(Date.UTC(year, month - 1, day));
};

export const isToday = (date: Date) => date.getTime() === todayInMombasa().getTime();

const toMinutes = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

const minutesNowInMombasa = () =>
  toMinutes(new Intl.DateTimeFormat("en-GB", { timeZone: "Africa/Nairobi", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(new Date()));

export const mombasaWeekday = (offsetDays = 0) => WEEKDAYS[(todayInMombasa().getUTCDay() + offsetDays) % 7];

export const hasEndedToday = (endTime?: string) => Boolean(endTime) && minutesNowInMombasa() >= toMinutes(endTime as string);

// Today's session is skipped once its announced end time has passed.
export const upcomingDates = (day: string, count: number, endTime?: string) => {
  const today = todayInMombasa();
  let offset = (WEEKDAYS.indexOf(day) - today.getUTCDay() + 7) % 7;
  if (offset === 0 && endTime && minutesNowInMombasa() >= toMinutes(endTime)) offset = 7;
  return Array.from({ length: count }, (_, index) => new Date(today.getTime() + (offset + index * 7) * DAY_MS));
};

export const formatSessionDate = (date: Date) =>
  new Intl.DateTimeFormat("en-GB", { timeZone: "UTC", weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(date);

export const sessionDateParts = (date: Date) => ({
  day: new Intl.DateTimeFormat("en-GB", { timeZone: "UTC", day: "numeric" }).format(date),
  month: new Intl.DateTimeFormat("en-GB", { timeZone: "UTC", month: "short" }).format(date),
});

export const weekNumber = (date: Date) => Math.floor(date.getTime() / (7 * DAY_MS));

const icsDate = (date: Date) => date.toISOString().slice(0, 10).replace(/-/g, "");
const icsText = (text: string) => text.replace(/[\\;,]/g, (character) => `\\${character}`).replace(/\n/g, "\\n");
const fold = (line: string) => line.match(/.{1,70}/g)?.join("\r\n ") ?? line;

type CalendarEvent = { slug: string; title: string; description: string; day: string; startTime?: string; endTime?: string };

const NAIROBI_UTC_OFFSET_MS = 3 * 3_600_000;
const utcStamp = (date: Date, time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return new Date(date.getTime() + (hours * 60 + minutes) * 60_000 - NAIROBI_UTC_OFFSET_MS).toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z";
};

// Timed events when the Corner has announced a time; otherwise all-day reminders.
const eventDates = ({ day, startTime, endTime }: CalendarEvent) => {
  const [start] = upcomingDates(day, 1, endTime);
  return startTime && endTime
    ? { start: utcStamp(start, startTime), end: utcStamp(start, endTime), timed: true }
    : { start: icsDate(start), end: icsDate(new Date(start.getTime() + DAY_MS)), timed: false };
};

const recurrence = (day: string) => `RRULE:FREQ=WEEKLY;BYDAY=${ICS_DAYS[WEEKDAYS.indexOf(day)]}`;

export const calendarFile = (event: CalendarEvent) => {
  const { slug, title, description, day } = event;
  const { start, end, timed } = eventDates(event);
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//American Corner Mombasa//Weekly Program//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${slug}-weekly@american-corner-mombasa`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").slice(0, 15)}Z`,
    timed ? `DTSTART:${start}` : `DTSTART;VALUE=DATE:${start}`,
    timed ? `DTEND:${end}` : `DTEND;VALUE=DATE:${end}`,
    recurrence(day),
    `SUMMARY:${icsText(`${title} — American Corner Mombasa`)}`,
    `DESCRIPTION:${icsText(`${description}\nConfirm session details with the Corner: americancornermombasa@gmail.com, +254 722 819 795.`)}`,
    `LOCATION:${icsText(CORNER_ADDRESS)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].map(fold).join("\r\n");
};

export const googleCalendarUrl = (event: CalendarEvent) => {
  const { title, description, day } = event;
  const { start, end } = eventDates(event);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${title} — American Corner Mombasa`,
    dates: `${start}/${end}`,
    ctz: "Africa/Nairobi",
    details: `${description}\n\nConfirm session details with the Corner before visiting.`,
    location: CORNER_ADDRESS,
    recur: recurrence(day),
  });
  return `https://calendar.google.com/calendar/render?${params}`;
};
