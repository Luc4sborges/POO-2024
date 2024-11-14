function exibir(...strings: string[]): void {
    strings.forEach((string) => {
        console.log(string);
    });
}

exibir("a", "b");          
exibir("a", "b", "c");     
exibir("a", "b", "c", "d");
