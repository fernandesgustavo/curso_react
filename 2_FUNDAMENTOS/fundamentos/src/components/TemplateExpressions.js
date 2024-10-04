const TemplateExpressions = () => {

    // const name = "Gustavo"
    const data = {
        name: "Gustavo",
        age: 29,
        job: "Programmer",
    };

    return(
        <div>
            <h1>Olá {data.name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{4 + 4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    )
}

export default TemplateExpressions;