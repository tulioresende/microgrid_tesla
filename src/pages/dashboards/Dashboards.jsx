import React from 'react';
import { Chart } from 'react-charts';

import DashboardItem from '../../components/dashboardItem/DashboardItem';

import Icons from '../../globalVariables/componentsControl/DashboardItemControl';

import PageStructure from '../../components/pageStructure/PageStructure';
import Charts from '../../components/charts';

const {BarChart} = Charts;

const Dashboards = () =>{



    
    function MyChart() {
        const data = React.useMemo(
          () => [
            {
              label: 'Series 1',
              data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
            },
            {
              label: 'Series 2',
              data: [{ x: 1, y: 20 }, { x: 2, y: 20 }, { x: 3, y: 20 }]
            },
            {
              label: 'Series 3',
              data: [{ x: 1, y: 30 }, { x: 2, y: 30 }, { x: 3, y: 30 }]
            }
          ],
          []
        )
      
        const axes = React.useMemo(
          () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
          ],
          []
        )
      
        return (
          <div
            style={{
              width: '400px',
              height: '300px'
            }}
          >
            <Chart data={data} axes={axes} tooltip />
          </div>
        )
      }

    const renderFunction = () =>{
        return(
            <>
                <DashboardItem icon= {Icons.battery} routeAddress={'batteries'}/>
                <DashboardItem icon= {Icons.powerLine} routeAddress={'mainGrid'}/>
                {BarChart()}
            </>
        )
    }

    return (
        <PageStructure renderFunction={renderFunction} pageTitle={"Dashboards"}/>
    );
}

export default Dashboards;