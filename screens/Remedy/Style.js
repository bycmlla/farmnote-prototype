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
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageContainer: {
    alignItems: 'center',
  },
  cardImage: {
    marginBottom: 20,
    aspectRatio: 1,
    height: 60
  },
  cardOverlay: {
    justifyContent: "center",
    alignItems: 'center',
  },
  cardText: {
    color: "black",
  },
  cardText2: {
    color: "black",
    textAlign: "right",
  },
});
