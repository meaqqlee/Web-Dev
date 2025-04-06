from django.urls import path

from . import views

urlpatterns = [
    # Company URLs
    path('companies/', views.CompanyList.as_view()),
    path('companies/<int:id>/', views.CompanyDetail.as_view()),
    path('companies/<int:id>/vacancies/', views.CompanyVacanciesList.as_view()),

    # Vacancy URLs
    path('vacancies/', views.VacancyList.as_view()),
    path('vacancies/<int:id>/', views.VacancyDetail.as_view()),
    path('vacancies/top_ten/', views.TopTenVacanciesList.as_view()),
]