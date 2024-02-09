import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function ElementsTabs({ config, setActiveTab, activeTab }) {
   return (
      <Tabs orientation="vertical" variant="scrollable" value={activeTab}>
         {Object.keys(config).map((key, index) => {
            return (
               <Tab
                  key={index}
                  label={key}
                  value={key}
                  onClick={() => {
                     setActiveTab(key);
                  }}
               />
            );
         })}
      </Tabs>
   );
}

export default ElementsTabs;
