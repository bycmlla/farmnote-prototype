import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerDetails: {
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
  icons: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 70,
    gap: 20,
  },
  gadoImage: {
    marginTop: 10,
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
  withButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
});
