export const formatTime = (dateTimeString: string): string => {
  const date = new Date(dateTimeString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes.toString().padStart(2, '0')}`;
}

export const formatDuration = (minutes: number): string => {
  if (!minutes || isNaN(minutes)) return '';
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const h = hours > 0 ? `${hours}h` : '';
  const m = remainingMinutes > 0 ? `${remainingMinutes}m` : '';
  return `${h} ${m}`.trim();
};

export const formatDateToLabel = (dateString: any): string => {
  if (!dateString) return '';

  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  };
  return date?.toLocaleDateString('en-US', options); 
}

export const formatDateForParams = (date: Date) => {
  const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  const day = String(date.getDate()).padStart(2, '0');

  return `${weekday}, ${month} ${day}`;
};