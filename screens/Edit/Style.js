import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerEdit: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    marginTop: 20,
    marginLeft: 110,
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
  icons: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 70,
    gap: 20,
  },
  selectImage: {
    marginTop: 30,
  },
  cameraImage: {
    alignSelf: 'flex-end',
    // width: 20,
    height: 40,
    marginRight: 30,
    aspectRatio: 1
  },
  cardImage: {
    width: 430,
    height: 250,
    marginLeft: -18,
  },
  textContainer: {
    marginTop: 10,
  },
  h1: {
    fontSize: 23,
    marginBottom: 8,
  },
  h2: {
    fontSize: 16,
  },
  divider: {
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
    marginTop: 15,
  },
  greenButton: {
    backgroundColor: "#00BF2A",
    padding: 15,
    borderRadius: 20,
    alignSelf: "flex-end",
  },
  greenButtonText: {
    color: "white",
    fontSize: 15,
  },
  selectImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  selectText: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
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
