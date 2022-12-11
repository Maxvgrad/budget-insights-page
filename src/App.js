import SidebarContainer from "./container/SidebarContainer";
import TopBar from "./container/TopBar";
import ContentContainer from "./container/ContentContainer";

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
