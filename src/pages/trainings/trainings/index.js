import React from 'react';
import { getTrainingsThunk, setTrainingsAC } from '../../../redux/actions/trainingsActions';
import { connect } from 'react-redux';
import data from '../../../DB/getTrainings.js';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 90, editable: false, hide: true },
  {
    field: 'seminar',
    seminar: 'სემინარები',
    width: 250,
    editable: false,
  },
  {
    field: 'test',
    headerName: 'ტესტი',
    width: 250,
    editable: false,
  },
  {
    field: 'date',
    headerName: 'თარიღი',
    type: 'date',
    width: 310,
    editable: false,
  },
  {
    field: 'registration',
    headerName: 'რეგისტრაცია',
    width: 120,
    type: 'boolean',
    editable: false,
  },
];

function Trainings(props) {
  const { getTrainingsThunk, setTrainingsAC, trainings } = props;

  console.log(data);
  React.useEffect(() => {
    setTrainingsAC(data);
    // getTrainingsThunk();
  }, []);
  console.log(trainings);

  return (
    <Box>
      <DataGrid
        className="MuiDataGrid-virtualScrollerContent--overflowed"
        rows={trainings}
        columns={columns}
        pageSize={15}
        autoHeight
        rowsPerPageOptions={[15]}
        disableSelectionOnClick
      />
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    trainings: state.trainings.trainings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTrainingsThunk() {
      dispatch(getTrainingsThunk());
    },
    setTrainingsAC(data) {
      dispatch(setTrainingsAC(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trainings);
