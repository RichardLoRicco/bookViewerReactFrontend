export function chapterToUrlParam(chapter: string): string {
  return chapter
    .split(" ")
    .join('-')
    .toLowerCase()
}