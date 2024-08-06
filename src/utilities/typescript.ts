export function findAvailableFiles(): string[] {
    let fileNames: string[] = [];

    for(let counter = 1; counter < 9; counter++) {
        let fileName = `/biography/${counter}.jpeg`;
        fileNames.push(fileName);
    }

    return fileNames;
}

export function imgGallery(): string[] {
    let fileNames: string[] = [];

    for(let counter = 1; counter < 21; counter++) {
        let fileName = `/gallery/cristiano${counter}.jpg`;
        fileNames.push(fileName);
    }

    return fileNames;
}