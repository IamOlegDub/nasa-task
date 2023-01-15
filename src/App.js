import React, { useState } from "react";
import Filter from "./components/Filter";
import ItemList from "./components/ItemList";
import Container from "@mui/material/Container";
import { Divider, Box } from "@mui/material";

import "./App.scss";

function App() {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");

    function descSearch(desc) {
        return items.filter((item) => {
            return (
                item[desc]
                    .toString()
                    .toLowerCase()
                    .indexOf(query.toLowerCase()) > -1
            );
        });
    }

    function search() {
        let newSearch = descSearch("title").concat(descSearch("summary"));
        let filteredSearch = newSearch.filter((item, index) => {
            return newSearch.indexOf(item) === index;
        });
        return filteredSearch;
    }

    return (
        <div className="App">
            <Container>
                <Box className="App__box">
                    <Context.Provider value={search().length}>
                        <Filter query={query} setQuery={setQuery} />
                    </Context.Provider>
                    <Divider />
                    <ItemList
                        setItems={setItems}
                        search={search}
                        query={query}
                    />
                </Box>
            </Container>
        </div>
    );
}

export const Context = React.createContext();
export default App;
