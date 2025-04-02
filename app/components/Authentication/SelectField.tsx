import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { IRole } from "@/app/interface/user/IRole";
import { ISpecies } from "@/app/interface/pet/ISpecies";
import { IServiceCategory } from "@/app/interface/service/IServiceCategory";

interface SelectFieldProps<T> {
  label: string;
  name: string;
  value: number;
  onChange: (value: number) => void;
  options: T[];
  error?: string;
  getOptionKey: (option: T) => number;
  getOptionLabel: (option: T) => string;
}

const SelectField = <T,>({
  label,
  value,
  onChange,
  options,
  error,
  getOptionKey,
  getOptionLabel,
}: SelectFieldProps<T>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={value} onValueChange={onChange} style={styles.picker}>
          <Picker.Item label={`Select a ${label}`} value={0} />
          {options.map((option) => (
            <Picker.Item key={getOptionKey(option)} label={getOptionLabel(option)} value={getOptionKey(option)} />
          ))}
        </Picker>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

// Usage Example
const roleSelectField = (
  <SelectField<IRole>
    label="Role"
    name="role"
    value={1}
    onChange={(value) => console.log(value)}
    options={[{ roleId: 1, name: "Admin" }]}
    getOptionKey={(option) => option.roleId}
    getOptionLabel={(option) => option.name}
  />
);

const speciesSelectField = (
  <SelectField<ISpecies>
    label="Species"
    name="species"
    value={2}
    onChange={(value) => console.log(value)}
    options={[{ speciesId: 2, name: "Dog", slug: "dog", description: "", image: "" }]}
    getOptionKey={(option) => option.speciesId}
    getOptionLabel={(option) => option.name}
  />
);

const serviceCategorySelectField = (
  <SelectField<IServiceCategory>
    label="Category"
    name="category"
    value={3}
    onChange={(value) => console.log(value)}
    options={[{ categoryId: 3, name: "Grooming" }]}
    getOptionKey={(option) => option.categoryId}
    getOptionLabel={(option) => option.name}
  />
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    color: "#4B5563",
    fontWeight: "600",
    marginBottom: 4,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  picker: {
    height: 44,
  },
  errorText: {
    color: "#EF4444",
    fontSize: 12,
    marginTop: 4,
  },
});

export default SelectField;
