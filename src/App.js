import { UseState } from './examples/UseState'
import { Effect } from './examples/Effect'
import { Ref } from './examples/Ref'
import { Memo } from './examples/Memo'
import { Callback } from './examples/Callback'
import { CustomHooks } from './examples/CustomHooks'


function App() {

  return (
    <div className="container pt-3">
      <h1 style={{color: 'darkred'}}>Basic hooks</h1>
      <br /><hr />

      <h2 style={{color: 'darkcyan'}}>"UseState"</h2>
      <UseState />
      <br /><hr />

      <h2 style={{color: 'darkcyan'}}>"UseEffect"</h2>
      <Effect />
      <br /><hr />

      <h2 style={{color: 'darkcyan'}}>"UseRef"</h2>
      <Ref />
      <br /><hr />

      <h2 style={{color: 'darkcyan'}}>"UseMemo"</h2>
      <Memo /> 
      <br /><br /><hr />

      <h2 style={{color: 'darkcyan'}}>"UseCallback"</h2>
      <Callback />
      <br /><hr />

      <h2 style={{color: 'darkcyan'}}>"CustomHooks"</h2>
      <CustomHooks />
    </div>
  );
}

export default App;
