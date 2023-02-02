import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "../routers/AppRouter";

/////////////// si no usas las importacione svite te tira error

function App() {

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
