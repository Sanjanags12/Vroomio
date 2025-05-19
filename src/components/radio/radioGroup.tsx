import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
  } from 'react';
  import { View } from 'react-native';
  import styles from './radioButton.styles'; 
  
  // context type
  type RadioContextType = {
    value: string | undefined;
    setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  };
  
  // props type
  type RadioGroupProps = {
    children: ReactNode;
    onChange?: (value: string | undefined) => void;
  };
  
  // create the context
  const RadioGroupContext = createContext<RadioContextType>(null!);
  
  // custom hook to consume context
  export const useRadioGroupContext = () => {
   
    return useContext(RadioGroupContext);
  };

  // RadioGroup component
  const RadioGroup= ({ children, onChange }:RadioGroupProps) => {
    const [value, setValue] = useState<string | undefined>();
  
    useEffect(() => {
      if (onChange) {
        onChange(value);
      }
    }, [value, onChange]);
  
    return (
      <RadioGroupContext.Provider value={{ value, setValue }}>
        <View style={styles.groupContainer}>{children}</View>
      </RadioGroupContext.Provider>
    );
  };
  
  export default RadioGroup;
  