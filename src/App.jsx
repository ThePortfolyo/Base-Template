import { useEffect, useState } from 'react';
import AppRoutes from './app/router';
import { ScannerPage } from './table/scannerPage';
import { TableView } from './table/tableView';
import axios from 'axios';

function App() {
    const [data, setData] = useState();
    console.log(data);
    useEffect(() => {
        axios('https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records')
            .then((ele) => setData(ele.data))
            .catch((err) => err);
    }, []);
    return (
        <div className=" h-full md:mx-20 mx-1 flex flex-col space-y-10">
            <TableView data={data} />
            <ScannerPage data={data} />
        </div>
    );
}

export default App;
