import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function FormNav({ config, setActiveTab, activeTab }) {
   return (
      <Tabs
         className="formNav"
         orientation="vertical"
         variant="scrollable"
         value={activeTab}
         sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
         }}
      >
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

export default FormNav;
