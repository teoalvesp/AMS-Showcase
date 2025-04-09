# Etapa de build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copia tudo da raiz (incluindo a pasta School)
COPY . .

# Publica o projeto dentro da pasta School
RUN dotnet publish ./School/School.csproj -c Release -o /app/out

# Etapa de runtime
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app

# Copia os arquivos publicados
COPY --from=build /app/out .

# Porta padrão da Render
ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

# Executa o projeto
ENTRYPOINT ["dotnet", "School.dll"]
