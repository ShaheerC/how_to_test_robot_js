const {newRobot, station, isWorkday, prioritizeTasks}  = require("./robot.js");

// remove .skip when you're ready to implement the test
test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {
  // arrange
  let robot_one = newRobot(true, true, false);
  
  // act
  let result = station(robot_one);

  // assert
  expect(result).toEqual(1);
});

test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {
  // arrange
  let robot_two = newRobot(true, false, true);

  // act
  let result = station(robot_two);

  // assert
  expect(result).toEqual(2);
});

test('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {
  // arrange
  let robot_three = newRobot(true, false, false);

  // act
  let result = station(robot_three);

  // assert
  expect(result).toEqual(3);
});

test('test_that_robot_in_good_condition_sent_to_station_4', () => {
  // arrange
  let robot_four = newRobot(false, false, false);

  // act
  let result = station(robot_four);

  // assert
  expect(result).toEqual(4);
});

test('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {
  // arrange
  let robot_five = newRobot(true, false, false);

  // act
  let result = prioritizeTasks(robot_five);

  // assert
  expect(result).toEqual(-1);
})

test('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {
  // arrange
  let robot_six = newRobot(true, false, false);
  robot_six.todos = [3,6,7];

  // act
  let result = prioritizeTasks(robot_six);

  // assert
  expect(result).toEqual(7);
});

test('test_workday_on_day_off_returns_false', () => {
  // arrange
  let robot_seven = newRobot(false, false, false);
  robot_seven.dayOff = 10;
  // act
  let result = isWorkday(robot_seven, 10);

  // assert
  expect(result).toEqual(false);
});

test('test_workday_not_day_off_returns_true', () => {
  // arrange
  let robot_eight = newRobot(false, false, false);
  robot_eight.dayOff = 10;

  // act
  let result = isWorkday(robot_eight, 11);

  // assert
  expect(result).toEqual(true);
});
