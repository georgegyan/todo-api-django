from rest_framework.test import APIClient
import pytest

@pytest.mark.django_db
def test_task_api():
    client = APIClient()
    response = client.post('/api/tasks/', {'title': 'Test API'}, format='json')
    assert response.status_code == 201
    assert response.data['title'] == 'Test API'