function guidS4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

export function guid() {
  // return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
  return (
    guidS4() +
    guidS4() +
    '-' +
    guidS4() +
    '-' +
    guidS4() +
    '-' +
    guidS4() +
    '-' +
    guidS4() +
    guidS4() +
    guidS4()
  );
}

export function guidForcedUniqueness(
  checkExistence: (id: string) => boolean
): string {
  let id = guid();
  while (checkExistence(id)) {
    id = guid();
  }

  return id;
}