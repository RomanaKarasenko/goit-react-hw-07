import ContactList from './components/contactList/ContactList';
import ContactForm from './components/contactForm/ContactForm';
import SearchBox from './components/searchBox/SearchBox';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
