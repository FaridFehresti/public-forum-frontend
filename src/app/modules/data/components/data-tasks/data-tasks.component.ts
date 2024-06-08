import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
export interface Task {
  name: string;
  completed: boolean;
  description: string;
  tags?: Array<string>;
  color: ThemePalette;
  subtasks?: Task[];
  id: number;
  allComplete: boolean;
  someComplete: boolean;
}
@Component({
  selector: 'app-data-tasks',
  templateUrl: './data-tasks.component.html',
  styleUrl: './data-tasks.component.scss',
})
export class DataTasksComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  allComplete: boolean = false;
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  listOfTasks: Array<Task> = [
    {
      name: 'Complete Project Proposal',
      completed: false,
      color: 'primary',
      allComplete: false,
      someComplete: false,
      id: 1,
      description: 'Draft and finalize the project proposal document.',
      tags: ['work', 'deadline'],
      subtasks: [
        {name: 'Research',
          allComplete: false,
          someComplete: false, id: 2, description: 'Gather necessary information and data.', completed: false, color: 'primary'},
        {name: 'Outline',
          allComplete: false,
          someComplete: false, id: 3, description: 'Create a detailed outline of the proposal.', completed: false, color: 'accent'},
        {name: 'Review',
          allComplete: false,
          someComplete: false, id: 4, description: 'Review and revise the draft.', completed: false, color: 'warn'},
      ],
    },
    {
      name: 'Complete Project Proposal',
      completed: false,
      color: 'primary',
      allComplete: false,
      someComplete: false,
      id: 5,
      description: 'Draft and finalize the project proposal document.',
      tags: ['work', 'deadline'],
      subtasks: [
        {name: 'Research',
          allComplete: false,
          someComplete: false, id: 12, description: 'Gather necessary information and data.', completed: false, color: 'primary'},
        {name: 'Outline',
          allComplete: false,
          someComplete: false, id: 34, description: 'Create a detailed outline of the proposal.', completed: false, color: 'accent'},
        {name: 'Review',
          allComplete: false,
          someComplete: false, id: 65, description: 'Review and revise the draft.', completed: false, color: 'warn'},
      ],
    },
  ];
  updateAllComplete(id: number) {
    const task = this.listOfTasks.find(task => task.id === id);
    if (task && task.subtasks) {
      task.allComplete = task.subtasks.every(subtask => subtask.completed);
      task.someComplete = task.subtasks.some(subtask => subtask.completed) && !task.allComplete;
    }
  }
  
  someComplete(id: number): boolean {
    const task = this.listOfTasks.find(task => task.id === id);
    if (task && task.subtasks) {
      return task.subtasks.some(subtask => subtask.completed) && !task.allComplete;
    }
    return false;
  }
  
  setAll(completed: boolean, id: number) {
    const task = this.listOfTasks.find(task => task.id === id);
    if (task && task.subtasks) {
      task.subtasks.forEach(subtask => subtask.completed = completed);
      this.updateAllComplete(id);
    }
  }
}
