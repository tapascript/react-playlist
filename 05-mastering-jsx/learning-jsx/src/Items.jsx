const Items = () => {
    const itemList = [
        {"id": crypto.randomUUID() , "value":"test1234"},
        {"id": crypto.randomUUID() , "value":"test"},
        {"id": crypto.randomUUID() , "value":"Learn React like a Cake Walk"},
        {"id": crypto.randomUUID() , "value":"Get Stronger in JavaScript"},
        {"id": crypto.randomUUID() , "value":"Be Master of Problem Solving"},
        
    ];

    console.log(itemList)

    const items = [];
    itemList.forEach((item) => {
        const liItem = <li key={item.id}>{item.value}</li>;
        items.push(liItem);
    });

    console.log(items);
    return <ul>{items}</ul>;
};

export default Items;
