export function getHumanReadableDateTime() {
  const now = new Date(); // Get the current date and time

  // Extract the components of the current date
  const year = now.getFullYear();
  const month = now.toLocaleString("default", { month: "long" }); // Get full month name (e.g., 'December')
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Determine AM/PM for 12-hour format
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  const formattedMinutes = String(minutes).padStart(2, "0"); // Ensure two digits for minutes
  const formattedSeconds = String(seconds).padStart(2, "0"); // Ensure two digits for seconds

  // Combine into a human-readable string
  const dateString = `${month} ${day}, ${year}`; // e.g., 'December 23, 2024'
  const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`; // e.g., '6:45:12 PM'
  const fullDateTime = `${dateString} at ${timeString}`; // e.g., 'December 23, 2024 at 6:45:12 PM'

  return fullDateTime;
}
