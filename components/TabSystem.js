import Tab from "./Tab";

export default function TabSystem(props) {
  function tabClickHandler(e) {
    console.log(`click!`);

    const tabList = document.querySelectorAll(".loopokrator-tab-btn");

    tabList.forEach((tab) => {
      tab.classList.remove("active");
    });
    e.target.classList.add("active");

    props.value(e.target.innerText);
  }

  return (
    <div className="loopokrator-tab-selector">
      {props.tabs.map((tab, index) => (
        <Tab
          text={tab.text}
          isActive={tab.isActive}
          tabClickHandler={tabClickHandler}
          key={index}
        />
      ))}
      {/* <Tab
        text="My Articles"
        isActive="true"
        tabClickHandler={tabClickHandler}
      />
      <Tab text="Settings" tabClickHandler={tabClickHandler} /> */}
      {/* <button className="loopokrator-tab-btn active">My Articles</button>
      <button className="loopokrator-tab-btn">Settings</button> */}
    </div>
  );
}
