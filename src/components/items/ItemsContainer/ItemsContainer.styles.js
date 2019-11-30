import { createUseStyles } from 'react-jss';

export default createUseStyles({
  itemsContainer: {
    width: '100%',
    height: 'calc(100% - 50px)',
    minHeight: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  groupsContainer: {
    display: 'flex',
    height: '100%',
    width: 'calc(100% - 100px)',
    padding: [0, 50],
    overflow: 'scroll',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',

    '& > *': {
      opacity: 0,
      transition: 'opacity 200ms ease',
    },

    '& > div + div': {
      marginLeft: 20,
    }

  },
});