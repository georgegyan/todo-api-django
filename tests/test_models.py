from todo.models import Task
import pytest

@pytest.mark.django_db
def test_task_creation():
    task = Task.objects.create(title="Test Task")
    assert task.title == "Test Task"
    assert not task.completed