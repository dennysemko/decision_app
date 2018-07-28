console.log('App.js is running!'); 

// JSX - JacaScript XML

const app = {
    title: "Indecision",
    subtitle: "Get your life in check!",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option){
        app.options.push(option);
        e.target.elements.option.value = "";
        render();
    }
};

const removeAll = () => {
    app.options = [];
    render();
};

const appRoot = document.getElementById('app');

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options - KYS"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove all</button>
            <ol>
                {app.options.map( (number) => <li key={number}>{number}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();