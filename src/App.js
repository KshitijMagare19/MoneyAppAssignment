import React from 'react';

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import Navbar from 'react-bootstrap/Navbar';

import { useDownloadExcel } from 'react-export-table-to-excel';
import "@blueprintjs/core/lib/css/blueprint.css";
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import { useRef } from 'react';

function App() {

   const tableref = useRef(null)
   const { onDownload } = useDownloadExcel({
      currentTableRef: tableref.current,
      filename: 'AssignmentData',
      sheet: 'UserData'
   })

   return (
      <>
         <Navbar bg="light" expand="lg">
            <Container fluid>
               <Navbar.Brand href="#">Google Sheet Clone</Navbar.Brand>
               
               <Form className='butform' style={{
                     marginLeft : '1rem',
                  }}>
                  </Form>
                  <Form>
                     <button className='btn btn-outline-success' onClick={onDownload}>Download</button>
                  </Form>
            </Container>
         </Navbar>
         <div className='table'>
            <table class="bp4-html-table bp4-html-table-bordered 
                bp4-html-table-condensed bp4-html-table-striped" ref={tableref}>
               <thead>
                  <tr style={{
                     textAlign: 'center',
                  }}>
                     <th></th>
                     <th>A</th>
                     <th>B</th>
                     <th>C</th>
                     <th>D</th>
                     <th>E</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td className='firstrow'>1</td>

                     <td><input type="text" name="firstcell"></input></td>
                     <td><input type="text"></input></td>
                     <td><input type="text"></input></td>
                     <td><input type="text"></input></td>
                     <td><input type="text"></input></td>
                  </tr>
                  <tr>
                     <td className='firstrow'>2</td>

                     <td className='colorRow'><input type="text"></input></td>
                     <td className='colorRow'><input type="text"></input></td>
                     <td className='colorRow'><input type="text"></input></td>
                     <td className='colorRow'><input type="text"></input></td>
                     <td className='colorRow'><input type="text"></input></td>
                  </tr>
                  <tr>
                     <td className='firstrow'>3</td>
                     <td><input type="text"></input></td>
                     <td><input type="text"></input></td>
                     <td><input type="text"></input></td>
                     <td><input type="text"></input></td>
                     <td><input type="text"></input></td>
                  </tr>
                  <tr>
                     <td className='firstrow'>4</td>
                     <td className='colorRow'><input type="text"></input></td>
                     <td className='colorRow'><input type="text"></input></td>
                     <td className='colorRow'><input type="text"></input></td>
                     <td className='colorRow'><input type="text"></input></td>
                     <td className='colorRow'><input type="text"></input></td>
                  </tr>
                  <tr>
                     <td className='firstrow'>5</td>
                     <td><input type="text"></input></td>
                     <td><input type="text"></input></td>
                     <td><input type="text"></input></td>
                     <td><input type="text"></input></td>
                     <td><input type="text"></input></td>
                  </tr>
                  <tr>
                     <td className='firstrow'>6</td>
                     <td className='colorRow'><input type="text"></input></td>
                     <td className='colorRow'><input type="text"></input></td>
                     <td className='colorRow'><input type="text"></input></td>
                     <td className='colorRow'><input type="text"></input></td>
                     <td className='colorRow'><input type="text"></input></td>
                  </tr>
                  <tr>
                     <td className='firstrow'>7</td>
                     <td><input type="text"></input></td>
                     <td><input type="text"></input></td>
                     <td><input type="text"></input></td>
                     <td><input type="text"></input></td>
                     <td><input type="text"></input></td>
                  </tr>
                  <tr>
                     <td className='firstrow'>8</td>
                     <td className='colorRow'><input type="text"></input></td>
                     <td className='colorRow'><input type="text"></input></td>
                     <td className='colorRow'><input type="text"></input></td>
                     <td className='colorRow'><input type="text"></input></td>
                     <td className='colorRow'><input type="text"></input></td>
                  </tr>
                  <tr>
                     <td className='firstrow'>9</td>
                     <td><input type="text"></input></td>
                     <td><input type="text"></input></td>
                     <td><input type="text"></input></td>
                     <td><input type="text"></input></td>
                     <td><input type="text"></input></td>
                  </tr>
                  <tr>
                     <td className='firstrow'>10</td>
                     <td className='colorRow'><input type="text"></input></td>
                     <td className='colorRow'><input type="text"></input></td>
                     <td className='colorRow'><input type="text"></input></td>
                     <td className='colorRow'><input type="text"></input></td>
                     <td className='colorRow'><input type="text"></input></td>
                  </tr>
               </tbody>
            </table>

         </div>
      </>

   );
}

export default App;
