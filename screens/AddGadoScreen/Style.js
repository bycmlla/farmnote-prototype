import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    marginTop: 30,
    marginLeft: 90,
  },
  inputContainer: {
    marginBottom: 20,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputDivisor: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputField: {
    flex: 1,
    paddingHorizontal: 15,
    height: 40,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 10,
    gap: 10,
  },
  titleButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: 10,
  },
  selectText: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  selectImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  selectImage: {
    marginTop: 30,
  },
  confirmButton: {
    backgroundColor: "#00BF2A",
    paddingVertical: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  confirmButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
