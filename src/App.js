import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Entry } from './pages/entry/Entry.page';

function App() {
  return (
    <div className="App">
      {/* <Entry></Entry> */}
      <DefaultLayout>
        SEND PAGE CONTENT
      </DefaultLayout>
    </div>
  );
}

export default App;
