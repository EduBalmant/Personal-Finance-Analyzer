print("=" * 40)
print("      PERSONAL FINANCE ANALYZER")
print("=" * 40)

# Salário
salario = float(input("\nDigite seu salário: R$ "))

# Gastos
print("\nDigite seus gastos:")

alimentacao = float(input("Alimentação: R$ "))
transporte = float(input("Transporte: R$ "))
lazer = float(input("Lazer: R$ "))
contas = float(input("Contas: R$ "))
outros = float(input("Outros: R$ "))

# Calculando o total
total_gastos = (
    alimentacao
    + transporte
    + lazer
    + contas
    + outros
)

# Dinheiro que sobrou
sobrou = salario - total_gastos

# Resultado
print("\n" + "=" * 40)
print("             RESULTADO")
print("=" * 40)

print(f"\nSalário: R$ {salario:.2f}")

print(f"Alimentação: R$ {alimentacao:.2f}")
print(f"Transporte:  R$ {transporte:.2f}")
print(f"Lazer:       R$ {lazer:.2f}")
print(f"Contas:      R$ {contas:.2f}")
print(f"Outros:      R$ {outros:.2f}")

print("\n" + "-" * 40)

print(f"Total gasto: R$ {total_gastos:.2f}")
print(f"Restante:    R$ {sobrou:.2f}")

# Análise
print("\n" + "=" * 40)
print("          ANÁLISE AUTOMÁTICA")
print("=" * 40)

if sobrou > 0:
    print("\n✅ Você terminou o mês com dinheiro sobrando.")

elif sobrou == 0:
    print("\n⚠️ Você gastou todo o seu salário.")

else:
    print("\n🚨 Seus gastos ultrapassaram seu salário.")

# Criando um dicionário com os gastos
gastos = {
    "Alimentação": alimentacao,
    "Transporte": transporte,
    "Lazer": lazer,
    "Contas": contas,
    "Outros": outros
}

# Descobrindo o maior gasto
maior_gasto = max(gastos, key=gastos.get)

print(f"\n📊 Maior gasto: {maior_gasto}")
print(f"Valor: R$ {gastos[maior_gasto]:.2f}")

# Porcentagem dos gastos
if salario > 0:

    porcentagem_gastos = (total_gastos / salario) * 100

    print(f"\n📈 Você gastou {porcentagem_gastos:.1f}% da sua renda.")

# Alertas
if total_gastos > salario:

    print("\n🚨 ALERTA:")
    print("Você está gastando mais do que ganha.")

elif total_gastos >= salario * 0.80:

    print("\n⚠️ ATENÇÃO:")
    print("Você já utilizou 80% ou mais da sua renda.")

else:

    print("\n✅ Situação:")
    print("Seus gastos estão abaixo de 80% da sua renda.")

print("\n" + "=" * 40)
print("       ANÁLISE FINALIZADA")
print("=" * 40)