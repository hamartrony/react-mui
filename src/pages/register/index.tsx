import {
  Box,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Form } from "@unform/web";
import { useState } from "react";
import { VTextField } from "../../forms";
import { LayoutPages } from "../../layouts/LayoutPages";
import { UserService } from "../../services/users";

export const Register = () => {
  const [alignment, setAlignment] = useState(false);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: boolean
  ) => {
    setAlignment(newAlignment);
  };

  // const newUser = useCallback((data) => {
  //   UserService.UserCreate(data).then((result) => {});
  // }, []);

  // console.log(newUser);

  return (
    <LayoutPages>
      <Form onSubmit={(data) => UserService.UserCreate(data)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            width: 411,
          }}
        >
          <Typography variant="h5" component="h5">
            Cadastro
          </Typography>
          {/* INFORMAÇÕES PESSOAIS */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="body1" component="p">
              Informações pessoais
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography variant="body2" component="p">
                Nome
              </Typography>
              <VTextField name="name" placeholder="Ex: André Matos" />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography variant="body2" component="p">
                Email
              </Typography>
              <VTextField name="email" placeholder="Ex: andre@mail.com.br" />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography variant="body2" component="p">
                CPF
              </Typography>
              <VTextField name="cpf" placeholder="000.000.000-00" />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography variant="body2" component="p">
                Celular
              </Typography>
              <VTextField name="phone" placeholder="(DDD) 90000-0000" />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography variant="body2" component="p">
                Data de nascimento
              </Typography>
              <VTextField name="birthday" placeholder="00/00/00" />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography variant="body2" component="p">
                Descrição
              </Typography>
              <VTextField
                multiline
                rows={3}
                name="description"
                placeholder="Digitar descrição"
              />
            </Box>
          </Box>

          {/* INFORMAÇÕES DE ENDEREÇO */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="body1" component="p">
              Informações de endereço
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography variant="body2" component="p">
                CEP
              </Typography>
              <VTextField name="cep" placeholder="00000.000" />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  width: "48%",
                }}
              >
                <Typography variant="body2" component="p">
                  Estado
                </Typography>
                <VTextField name="state" placeholder="Digitar Estado" />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  width: "48%",
                }}
              >
                <Typography variant="body2" component="p">
                  Cidade
                </Typography>
                <VTextField name="city" placeholder="Digitar Cidade" />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography variant="body2" component="p">
                Rua
              </Typography>
              <VTextField name="street" placeholder="Digitar rua" />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  width: "48%",
                }}
              >
                <Typography variant="body2" component="p">
                  Número
                </Typography>
                <VTextField name="number" placeholder="Digitar número" />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  width: "48%",
                }}
              >
                <Typography variant="body2" component="p">
                  Complemento
                </Typography>
                <VTextField name="complement" placeholder="Ex: apart 307" />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography variant="body2" component="p">
                Tipo de conta
              </Typography>
              <ToggleButtonGroup
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
              >
                <ToggleButton
                  value="true"
                  sx={{
                    width: "48%",
                    height: "3rem",
                  }}
                >
                  Comprador
                </ToggleButton>
                <ToggleButton
                  value="false"
                  sx={{
                    width: "48%",
                    height: "3rem",
                  }}
                >
                  Anunciante
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography variant="body2" component="p">
                Senha
              </Typography>
              <VTextField
                type="password"
                name="password"
                placeholder="Digitar senha"
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography variant="body2" component="p">
                Confirmar Senha
              </Typography>
              <VTextField
                type="password"
                name="pwd-confirm"
                placeholder="Digitar senha"
              />
            </Box>
          </Box>

          <Button
            variant="contained"
            type="submit"
            sx={{
              width: "100%",
              height: "3rem",
            }}
          >
            Finalizar cadastro
          </Button>
        </Box>
      </Form>
    </LayoutPages>
  );
};
