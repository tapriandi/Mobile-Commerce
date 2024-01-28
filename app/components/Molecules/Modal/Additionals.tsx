import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button, Counter, Gap, Modal } from '../../Atoms';
import { COLORS } from '../../../constant/colors';
import { FPercentage, widthPercentage } from '../../../utils/responsive';
import { CircleActiveIcon, CircleIcon } from '../../../assets/icons';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const ModalScanOntable = ({ isOpen, onClose }: Props) => {
  const [counter, setCounter] = useState<number>(0);
  const [iceSelected, setIceSelected] = useState<number>();
  const [sugarSelected, setSugarSelected] = useState<number>();

  const sugar = [
    { id: 1, label: '50%' },
    { id: 2, label: '100%' },
    { id: 3, label: '150%' },
  ];

  const ice = [
    { id: 1, label: '50%' },
    { id: 2, label: '100%' },
    { id: 3, label: '150%' },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <View style={{ padding: 20 }}>
        <Text style={styles.title}>Blue dragon gin</Text>
        <Gap height={20} />
        <View style={styles.options}>
          <Text style={styles.white}>Sugar</Text>
          <Gap height={10} />
          {sugar.map((item, idx) => (
            <Pressable
              key={idx}
              style={[styles.rowBetween, { paddingVertical: 5 }]}
              onPress={() => setSugarSelected(item.id)}>
              <View style={styles.row}>
                {item.id === sugarSelected ? (
                  <CircleActiveIcon />
                ) : (
                  <CircleIcon />
                )}
                <Gap width={5} />
                <Text
                  style={
                    item.id === sugarSelected
                      ? { color: '#AA5AFA' }
                      : { color: 'white' }
                  }>
                  {item.label}
                </Text>
              </View>
              <Text style={{ color: 'white' }}>Free</Text>
            </Pressable>
          ))}
          <Gap height={20} />

          <Text style={styles.white}>Ice</Text>
          <Gap height={10} />
          {ice.map((item, idx) => (
            <Pressable
              key={idx}
              style={[styles.rowBetween, { paddingVertical: 5 }]}
              onPress={() => setIceSelected(item.id)}>
              <View style={styles.row}>
                {item.id === iceSelected ? (
                  <CircleActiveIcon />
                ) : (
                  <CircleIcon />
                )}
                <Gap width={5} />
                <Text
                  style={
                    item.id === iceSelected
                      ? { color: '#AA5AFA' }
                      : { color: 'white' }
                  }>
                  {item.label}
                </Text>
              </View>
              <Text style={{ color: 'white' }}>Free</Text>
            </Pressable>
          ))}
          <Gap height={15} />
          <Counter
            styleCard={styles.counter}
            counter={counter}
            setCounter={setCounter}
          />
        </View>

        <View style={styles.rowBetween}>
          <Text style={styles.white}>Total</Text>
          <Text style={[styles.white, { fontWeight: 'bold' }]}>
            NT$ 165,000
          </Text>
        </View>
      </View>

      <Button
        title="Add to cart"
        onPress={() => console.log('lalla')}
        styles={styles.button}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  white: {
    color: 'white',
    fontSize: FPercentage(3.8),
  },
  title: {
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontSize: FPercentage(4.2),
    fontWeight: 'bold',
  },
  button: {
    width: widthPercentage('100%'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  options: {
    borderRadius: 8,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: COLORS.gray700,
  },
  counter: {
    paddingHorizontal: '20%',
    height: 46,
    justifyContent: 'space-around',
  },
});
export default ModalScanOntable;
