import Tag from './components/Tag/Tag'
import Select from './components/Select/Select'
import data from "./utils/data.json"

function App() {


  return (

      <div className='appCtn'>
        <Select jsonData={data}/>
        <Tag/>
      </div>


  )
}

export default App
