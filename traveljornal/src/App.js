import Header from "./components/Header"
import Entry from "./components/Entry";
import data from "./data.js"
import "./App.css"

export default function App(){
    const entryElements = data.map((entryData) =>(
    <Entry
        key = {entryData.key}
        {...entryData}
    />
    ));

    return (
        <>
            <Header/>
            {entryElements}
        </>
    );
}