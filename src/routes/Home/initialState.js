export default {
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gridTemplateRows: '50px 150px 50px',
    gridColumnGap: '10px',
    gridRowGap: '10px',
  },
  children: [
    {
      label: 'Header',
      gridColumn: '1 / -1',
      gridRow: '',
    },
    {
      label: 'Side Bar',
      gridColumn: '',
      gridRow: '',
    },
    {
      label: 'Content',
      gridColumn: '',
      gridRow: '',
    },
    {
      label: 'Footer',
      gridColumn: '1 / -1',
      gridRow: '',
    },
  ],
};
