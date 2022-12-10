import { UseState } from './examples/UseState'
import { Effect } from './examples/Effect'
import { Ref } from './examples/Ref'
import { Memo } from './examples/Memo'
import { Callback } from './examples/Callback'
import { CustomHooks } from './examples/CustomHooks'


function App() {

  return (
    <div className="container">
      <br /><hr />

      <h1 style={{color: 'darkcyan'}}>"UseState"</h1>
      <UseState />
      <br /><hr />

      <h1 style={{color: 'darkcyan'}}>"UseEffect"</h1>
      <Effect />
      <br /><hr />

      <h1 style={{color: 'darkcyan'}}>"UseRef"</h1>
      <Ref />
      <br /><hr />

      <h1 style={{color: 'darkcyan'}}>"UseMemo"</h1>
      <Memo /> 
      <br /><br /><hr />

      <h1 style={{color: 'darkcyan'}}>"UseCallback"</h1>
      <Callback />
      <br /><hr />

      <h1 style={{color: 'darkcyan'}}>"CustomHooks"</h1>
      <CustomHooks />
    </div>
  );
}

export default App;
