import React, {useState} from "react";
import {Button, Item, Segment, Label} from "semantic-ui-react";
import {useStore} from "../../../app/stores/Store";
import {observer} from "mobx-react-lite";

export default observer(function ActivityList() {
    const [target, setTarget] = useState('');
    const {activityStore} = useStore();
    const {loading, deleteActivity, activitiesByDate} = activityStore;

    function handleActivityDelete(id: string) {
        setTarget(id);
        deleteActivity(id);
    }

    return (
        <Segment>
            <Item.Group divided>
                {activitiesByDate.map(activity =>
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button floated='right' content='View' color='blue' onClick={() => activityStore.selectActivity(activity.id)} />
                                <Button
                                    name={activity.id}
                                    floated='right'
                                    content='Delete'
                                    color='red'
                                    onClick={() => handleActivityDelete(activity.id)}
                                    loading={loading && target === activity.id}
                                />
                                <Label basic content={activity.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                )}
            </Item.Group>
        </Segment>
    );
});