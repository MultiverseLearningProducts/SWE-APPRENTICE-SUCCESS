import React from "react";

function Item({name, refrigerate}) {
    return(<li className = "list__item">{name}</li>)
}

module.exports = Item;