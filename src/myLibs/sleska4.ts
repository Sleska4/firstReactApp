function idGenerate(arr: number[]){
    let id: number
    do {
        id = Math.random() * 1e16;
    } while (id in arr)
    return id
}

export {idGenerate}