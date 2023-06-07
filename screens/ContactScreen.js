import { ScrollView } from "react-native-gesture-handler";
import { Card } from "react-native-elements";
import { Text } from "react-native-elements";

const ContactScreen = () => {
    return (
        <ScrollView>
            <Card wrapperStyle={{ margin: 20 }}>
                <Card.Title>Contact Information</Card.Title>
                <Card.Divider></Card.Divider>
                <Text>Phone: 1-206-555-1234</Text>
                <Text>Email: campsites@nucamp.co</Text>
            </Card>
        </ScrollView>
    );
};

export default ContactScreen;
