const apiUrl = "https://www.abibliadigital.com.br/api";

const buscarTodosLivros = async () => {
    try {
        const response = await fetch(`${apiUrl}/books`);
        if (!response.ok) {
            throw new Error("Falha ao buscar livros");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao buscar livros:", error);
        return [];
    }
};

const buscarLivro = async (abreviacao, capitulo) => {
    try {
        const response = await fetch(
            `${apiUrl}/verses/nvi/${abreviacao}/${capitulo}`
        );
        if (!response.ok) {
            throw new Error("Falha ao buscar versículos");
        }
        const data = await response.json();
        return data.verses;
    } catch (error) {
        console.error("Erro ao buscar versículos:", error);
        return [];
    }
};

export { buscarTodosLivros, buscarLivro };
