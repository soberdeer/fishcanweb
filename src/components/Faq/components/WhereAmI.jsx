import React  from 'react';
import PropTypes from 'prop-types';
import Text from '../../typography/Text/Text';
import Title from '../../typography/Title/Title';

export default function WhereAmI({ classes, ...others }) {
  return (
    <div {...others}>
      <Title className={classes.mainTitle}>
        Куда я попал?
      </Title>
      <div className={classes.topic}>
        <Text noHyphens>
          <span className={classes.bold} style={{ fontSize: 16 }}>fishCanWeb</span>
          <span> - это приложение, помогающее найти вид рыбных консервов по коду на банке. Этот код помогает распознать,
          какая рыба на самом деле лежит в консерве, и вычислить недобросовестных производителей.
          </span>
        </Text>
      </div>
    </div>
  );
}

WhereAmI.propTypes = {
  classes: PropTypes.object.isRequired,
};
