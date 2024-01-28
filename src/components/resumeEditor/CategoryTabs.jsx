import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function CategoryTabs({ config, setActiveTab, activeTab }) {
   return (
      <Tabs value={activeTab} aria-label="basic tabs example">
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

export default CategoryTabs;
