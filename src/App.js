import SidebarContainer from "./SidebarContainer";
import TopBar from "./TopBar";
import ContentContainer from "./ContentContainer";

const App = () => (
    <div>
      <SidebarContainer />
        <div className="column-layout-main">
            <TopBar />
            <ContentContainer />
        </div>
    </div>
)

export default App
