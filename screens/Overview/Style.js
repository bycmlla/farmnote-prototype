import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginTop: 10,
    marginLeft: 10,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  reloadIconContainer: {
    marginRight: 10,
  },
  icon: {
    marginRight: 10,
  },
  reloadIcon: {
    marginTop: 7,
  },
  addIcon: {
    marginTop: 6,
  },
  gadoContainer: {
    marginTop: 40,
    marginLeft: 20,
  },
  cardImage: {
    marginBottom: 20,
  },
  cardOverlay: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "94%",
    padding: 12,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: "hidden",
  },
  cardText: {
    color: "black",
    textAlign: "left",
  },
  cardText2: {
    color: "black",
    textAlign: "right",
  },
});
