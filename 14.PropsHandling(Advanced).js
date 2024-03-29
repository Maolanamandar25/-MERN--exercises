import * as React from 'react';
const App = () => {
    const user = [
        {
        id: '2, ',
        firstName: 'Munez ',
        lastName: 'Garcia ',
        country: 'USA, ',
        city: 'New work ',
        },
        {
            id: '29, ',
            firstName: 'Garcia ',
            lastName: 'Munez ',
            country: 'India, ',
            city: 'India ',
        },
    ]

        const { id, country, city, ...userWithoutAddress } = user;

        console.log(userWithoutAddress);

        console.log(id);

        console.log(city);
        
        const [searchTerm, setSearchTerm] = React.useState('');
        const handleSearch = (event) => {
            setSearchTerm(event.target.value);
        };

        return (
            <div>
            <h1>Hello STCS!</h1>
            <Search search={searchTerm} onSearch={handleSearch} />
            
            <List list={user} />
            </div>
        );
        
};
const Search = ({ search, onSearch }) => (
    <div>
    <label htmlFor="search">Search: </label>
    <input
    id="search"
    type="text"
    value={search}
    onChange={onSearch}
    />
    </div>
);

const List = ({ list }) => (
    <ul>
    {list.map((item) => (
    <Item key={item.objectID} item={item} />
    ))}
    </ul>
);

const Item = ({ item }) => (
    <li>
    <span>{item.id}</span>
    <span>{item.firstName}</span>
    <span>{item.lastName}</span>
    <span>{item.country}</span>
    <span>{item.city}</span>
    </li>
);
export default App;
